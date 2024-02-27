[README](../README.md) > Report Portal

# Report Portal

## Install Docker
See https://reportportal.io/installation

## Configure and deploy ReportPortal

```
cd report-portal
curl -LO https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml
docker-compose -p reportportal up -d --force-recreate
```

## Launch ReportPortal

Open `http://localhost:8080`.
