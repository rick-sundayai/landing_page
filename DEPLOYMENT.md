# Nexus Landing Page - Google Cloud Deployment Guide

## Overview
This guide walks you through deploying the Nexus consulting landing page to Google Cloud Run using Docker containers.

## Prerequisites

### 1. Install Google Cloud CLI
```bash
# macOS (using Homebrew)
brew install google-cloud-sdk

# Or download from: https://cloud.google.com/sdk/docs/install
```

### 2. Authenticate with Google Cloud
```bash
gcloud auth login
gcloud auth application-default login
```

### 3. Set up Google Cloud Project
```bash
# Create a new project (or use existing)
gcloud projects create nexus-landing-page --name="Nexus Landing Page"

# Set the project as active
gcloud config set project nexus-landing-page

# Enable required APIs
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable artifactregistry.googleapis.com
```

## Manual Deployment (One-time setup)

### 1. Create Artifact Registry Repository
```bash
gcloud artifacts repositories create nexus-landing \
    --repository-format=docker \
    --location=us-central1 \
    --description="Nexus landing page container repository"
```

### 2. Configure Docker Authentication
```bash
gcloud auth configure-docker us-central1-docker.pkg.dev
```

### 3. Build and Push Container
```bash
# Build the Docker image
docker build -t us-central1-docker.pkg.dev/nexus-landing-page/nexus-landing/nexus-landing:latest .

# Push to Artifact Registry
docker push us-central1-docker.pkg.dev/nexus-landing-page/nexus-landing/nexus-landing:latest
```

### 4. Deploy to Cloud Run
```bash
gcloud run deploy nexus-landing \
  --image us-central1-docker.pkg.dev/nexus-landing-page/nexus-landing/nexus-landing:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --max-instances 10 \
  --min-instances 0 \
  --port 3000
```

## Automated Deployment with GitHub Actions

### 1. Create Google Cloud Service Account
```bash
# Create service account
gcloud iam service-accounts create nexus-deployer \
    --description="Service account for Nexus landing page deployment" \
    --display-name="Nexus Deployer"

# Grant necessary roles
gcloud projects add-iam-policy-binding nexus-landing-page \
    --member="serviceAccount:nexus-deployer@nexus-landing-page.iam.gserviceaccount.com" \
    --role="roles/cloudbuild.builds.builder"

gcloud projects add-iam-policy-binding nexus-landing-page \
    --member="serviceAccount:nexus-deployer@nexus-landing-page.iam.gserviceaccount.com" \
    --role="roles/run.admin"

gcloud projects add-iam-policy-binding nexus-landing-page \
    --member="serviceAccount:nexus-deployer@nexus-landing-page.iam.gserviceaccount.com" \
    --role="roles/storage.admin"

gcloud projects add-iam-policy-binding nexus-landing-page \
    --member="serviceAccount:nexus-deployer@nexus-landing-page.iam.gserviceaccount.com" \
    --role="roles/artifactregistry.writer"

# Generate and download service account key
gcloud iam service-accounts keys create ~/nexus-deployer-key.json \
    --iam-account=nexus-deployer@nexus-landing-page.iam.gserviceaccount.com
```

### 2. Configure GitHub Secrets
Add these secrets to your GitHub repository (Settings > Secrets and variables > Actions):

- `GCP_PROJECT_ID`: `nexus-landing-page`
- `GCP_SA_KEY`: Contents of the `~/nexus-deployer-key.json` file

### 3. Push to GitHub
The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
1. Build the Docker container
2. Push to Google Artifact Registry
3. Deploy to Cloud Run

## Custom Domain Setup

### 1. Map Custom Domain
```bash
# Map your custom domain to Cloud Run service
gcloud run domain-mappings create \
    --service nexus-landing \
    --domain nexus-consulting.com \
    --region us-central1
```

### 2. Configure DNS
Add the DNS records shown by the domain mapping command to your domain registrar.

## Environment Variables (if needed)

Add environment variables to Cloud Run:
```bash
gcloud run services update nexus-landing \
    --update-env-vars="NODE_ENV=production,CUSTOM_VAR=value" \
    --region us-central1
```

## Monitoring and Logs

### View Logs
```bash
gcloud run services logs read nexus-landing --region=us-central1
```

### Monitor Performance
Visit the Google Cloud Console:
1. Go to Cloud Run
2. Click on `nexus-landing` service
3. View metrics, logs, and revisions

## Cost Optimization

Current configuration:
- **Memory**: 512Mi (sufficient for Next.js)
- **CPU**: 1 vCPU (good performance)
- **Scaling**: 0-10 instances (scales to zero when idle)
- **Estimated cost**: $5-15/month depending on traffic

## Troubleshooting

### Build Issues
```bash
# Test Docker build locally
docker build -t nexus-test .
docker run -p 3000:3000 nexus-test
```

### Deployment Issues
```bash
# Check Cloud Run service status
gcloud run services describe nexus-landing --region=us-central1

# View recent deployments
gcloud run revisions list --service=nexus-landing --region=us-central1
```

## Security Notes

1. **Service Account**: Limited permissions for deployment only
2. **HTTPS**: Automatically enabled by Cloud Run
3. **Container Security**: Non-root user in Dockerfile
4. **Secrets**: Never commit service account keys to Git

## Next Steps

1. Set up monitoring and alerting
2. Configure backup/disaster recovery
3. Implement staging environment
4. Set up custom domain with SSL
5. Configure CDN for static assets (optional)