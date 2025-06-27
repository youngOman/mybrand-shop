# MyBrand Shop - 保養食品購物網站

完整的保養食品購物網站，採用前後端分離架構。

## 技術架構

### 前端 (Frontend)
- **框架**: Next.js 15 with App Router
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **特色**: 
  - Server-side Rendering (SSR)
  - Static Site Generation (SSG)
  - SEO 優化

### 後端 (Backend)
- **框架**: Django 5.2 + Django REST Framework
- **語言**: Python
- **資料庫**: SQLite (開發) / PostgreSQL (生產)
- **特色**:
  - RESTful API
  - 跨域支援 (CORS)
  - 圖片處理支援

## 專案結構

```
mybrand-shop/
├── backend/                 # Django 後端
│   ├── venv/               # Python 虛擬環境
│   ├── mybrand_shop_api/   # Django 專案設定
│   ├── manage.py           # Django 管理指令
│   └── requirements.txt    # Python 依賴套件
├── frontend/               # Next.js 前端
│   ├── src/               # 源碼目錄
│   ├── public/            # 靜態資源
│   ├── package.json       # Node.js 依賴套件
│   └── next.config.js     # Next.js 配置
└── README.md              # 專案說明文件
```

## 開發環境設置

### 後端設置

1. 進入後端目錄並啟動虛擬環境：
```bash
cd backend
source venv/bin/activate  # MacOS/Linux
# 或 venv\Scripts\activate  # Windows
```

2. 安裝依賴套件：
```bash
pip install -r requirements.txt
```

3. 執行資料庫遷移：
```bash
python manage.py makemigrations
python manage.py migrate
```

4. 建立超級使用者：
```bash
python manage.py createsuperuser
```

5. 啟動開發伺服器：
```bash
python manage.py runserver
```

### 前端設置

1. 進入前端目錄：
```bash
cd frontend
```

2. 安裝依賴套件：
```bash
npm install
```

3. 啟動開發伺服器：
```bash
npm run dev
```

## 開發指令

### 後端
- `python manage.py runserver` - 啟動開發伺服器
- `python manage.py makemigrations` - 建立資料庫遷移檔
- `python manage.py migrate` - 執行資料庫遷移
- `python manage.py createsuperuser` - 建立管理員帳戶

### 前端
- `npm run dev` - 啟動開發伺服器
- `npm run build` - 建置生產版本
- `npm run start` - 啟動生產伺服器
- `npm run lint` - 執行代碼檢查

## 存取位址

- 前端：http://localhost:3000
- 後端 API：http://localhost:8000
- Django Admin：http://localhost:8000/admin