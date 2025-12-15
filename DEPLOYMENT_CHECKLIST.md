# Google Cloud Deployment Checklist

## ✅ Pre-Deployment Checklist

### Local Testing
- [ ] Test Next.js build locally: `npm run build && npm start`
- [ ] Test Docker build locally: `docker build -t nexus-test .`
- [ ] Test Docker container locally: `docker run -p 3000:3000 nexus-test`
- [ ] Verify all pages load correctly at localhost:3000

### Google Cloud Setup
- [ ] Install Google Cloud CLI
- [ ] Authenticate: `gcloud auth login`
- [ ] Create or select project: `gcloud config set project PROJECT_ID`
- [ ] Enable APIs: Cloud Run, Artifact Registry, Cloud Build

### Repository Preparation
- [ ] Commit all changes to git
- [ ] Push to GitHub repository
- [ ] Verify all files are included (especially Dockerfile and configs)

## 🚀 Quick Deployment Commands

### Option 1: Manual Deployment (Fastest)
```bash
# 1. Set your project ID
export PROJECT_ID="your-project-id"

# 2. Enable services
gcloud services enable cloudbuild.googleapis.com run.googleapis.com artifactregistry.googleapis.com

# 3. Create artifact repository
gcloud artifacts repositories create nexus-landing --repository-format=docker --location=us-central1

# 4. Build and deploy in one command
gcloud run deploy nexus-landing \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --max-instances 10 \
  --min-instances 0
```

### Option 2: GitHub Actions (Automated)
1. Set up service account and get JSON key
2. Add GitHub secrets: `GCP_PROJECT_ID` and `GCP_SA_KEY`
3. Push to main branch - auto-deploys!

## 📋 Post-Deployment Tasks

### Immediate Verification
- [ ] Test deployed URL works
- [ ] Check all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Test form functionality (/audit page)

### Domain Setup (Optional)
- [ ] Map custom domain in Cloud Run console
- [ ] Update DNS records with your registrar
- [ ] Verify SSL certificate is active

### Monitoring Setup
- [ ] Set up uptime monitoring
- [ ] Configure alerting for downtime
- [ ] Review Cloud Run metrics

## 🔧 Troubleshooting

### Common Issues
1. **Build fails**: Check Node.js version in Dockerfile matches your local version
2. **Container won't start**: Verify PORT environment variable is set correctly
3. **404 errors**: Ensure Next.js routing is working in production mode
4. **Slow builds**: Check .gcloudignore excludes node_modules

### Debug Commands
```bash
# Check service status
gcloud run services describe nexus-landing --region=us-central1

# View logs
gcloud run services logs read nexus-landing --region=us-central1

# List revisions
gcloud run revisions list --service=nexus-landing --region=us-central1
```

## 💰 Cost Estimates

**Monthly costs (assuming moderate traffic):**
- Cloud Run: $5-15/month
- Artifact Registry: $0.10/month
- Network egress: $1-5/month
- **Total: ~$10-20/month**

**Free tier includes:**
- 2 million requests/month
- 400,000 GB-seconds/month
- 200,000 CPU-seconds/month

## 🚀 Your Next Steps

1. **Choose deployment method** (Manual vs GitHub Actions)
2. **Run the commands** from this checklist
3. **Test your live site**
4. **Set up custom domain** (if desired)
5. **Configure monitoring** for peace of mind

Your Nexus landing page is ready to go live! 🎉