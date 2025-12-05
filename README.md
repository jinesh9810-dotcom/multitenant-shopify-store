# 🚀 Multitenant Shopify Store – Data Ingestion & Insights Platform

A fully functional **multi-tenant Shopify data ingestion + analytics dashboard**.
This platform ingests **customers, orders, products** from multiple Shopify stores (tenants), stores them in an isolated PostgreSQL schema, and provides a clean insights dashboard to visualize business performance.

---

## 🧱 Features

### 🔹 Multi-Tenant Architecture
Each Shopify store onboarded becomes its own **tenant**, with isolated data.

### 🔹 Shopify Data Ingestion
Fetch and store:
- Customers  
- Orders  
- Products  

Supports:
- Manual ingestion  
- Automatic cron sync every 30 minutes  
- Shopify webhook ingestion  

### 🔹 Insights Dashboard
Visualizes:
- Total customers  
- Total orders  
- Total revenue  
- Top customers  
- Revenue trend chart  

---

## 📁 Project Structure

```
multitenant-shopify-store/
│
├── backend/
│   ├── src/
│   │   ├── tenants/
│   │   ├── shopify/
│   │   ├── metrics/
│   │   ├── config/
│   │   ├── scheduler.js
│   │   └── index.js
│   ├── prisma/
│   └── render.yaml
│
└── frontend/
    ├── app/
    │   ├── login/
    │   └── dashboard/
    ├── components/
    ├── utils/
    └── .env.example
```

---

## 🗄️ Database Schema

```
Tenant
 ├── id
 ├── name
 ├── shopUrl
 └── accessToken

Customer
 ├── id
 ├── shopifyId
 ├── email
 ├── totalSpent
 └── tenantId

Order
 ├── id
 ├── shopifyId
 ├── totalAmount
 ├── createdAt
 └── tenantId

Product
 ├── id
 ├── shopifyId
 ├── title
 └── tenantId
```

---

## 🧪 API Endpoints

### ▶ POST /api/tenant/onboard
```json
{
  "name": "Demo Store",
  "shopUrl": "yourstore.myshopify.com",
  "accessToken": "shpca_xxxx"
}
```

### ▶ GET /api/metrics  
Headers:  
```
x-tenant-id: TENANT_ID
```

---

## 🔄 Auto Sync Scheduler
Cron job (every 30 minutes):

```
*/30 * * * *
```

---

## 🌐 Deployment Instructions (Render)

### 1️⃣ Create PostgreSQL database  
### 2️⃣ Deploy Backend  
Build: `npm install`  
Start: `npm start`  
Env vars:
```
DATABASE_URL=
SHOPIFY_API_VERSION=2024-04
WEBHOOK_SECRET=
JWT_SECRET=
PORT=4000
```

Run Prisma migrations:
```
npx prisma migrate deploy
```

### 3️⃣ Deploy Frontend  
Build: `npm install && npm run build`  
Start: `npm start`  

Env vars:
```
NEXT_PUBLIC_API_URL=<backend-url>/api
NEXT_PUBLIC_TENANT_ID=<tenant-id>
```

---

## 📌 Improvements / Next Steps

- Shopify OAuth  
- Redis queue  
- Incremental sync  
- HMAC validation  
- Tailwind UI upgrade  

---
