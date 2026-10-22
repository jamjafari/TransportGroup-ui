# Translation glossary — review this first

These are the recurring domain nouns. Every English string in `en.json` is built from
them, so **correcting a term here and in `en.json` fixes it everywhere**. If any of these
is wrong for your industry or your customers, tell me the preferred wording and I'll
apply it across the catalogue.

The terms I was least certain about are marked **(?)** — please check those especially.

## Fleet & vehicles

| Persian | English used | Note |
|---|---|---|
| ناوگان | Fleet | |
| خودرو / خودروها | Vehicle / Vehicles | "Car" would be wrong for trucks |
| راننده / رانندگان | Driver / Drivers | |
| ماموریت‌ها | Missions | **(?)** "Trips" or "Jobs" may read better in English logistics |
| تایر | Tires | US spelling; "Tyres" if you prefer UK |
| سرویس خودرو | Vehicle Service | |
| نوع سرویس | Service Types | |
| معاینه فنی | Technical Inspection | **(?)** UK/US equivalent is often "MOT" / "Safety Inspection" |
| تصادفات | Accidents | **(?)** "Incidents" is the more common fleet-management term |
| بیمه | Insurance | |
| کارکرد | Odometer | |
| شماره پلاک | Plate Number | |
| شماره شاسی | Chassis Number | VIN, if that's what it holds |

## Fuel & cost

| Persian | English used | Note |
|---|---|---|
| سوخت | Fuel | |
| کارت سوخت | Fuel Cards | |
| سوخت‌گیری | Refuelling | **(?)** "Fuel Records" / "Fill-ups" are alternatives |
| هزینه‌ها | Expenses | |
| نوع هزینه | Expense Types | |
| مالی | Financial | |
| تامین‌کننده | Vendors | **(?)** "Suppliers" is equally common |

## Organisation & system

| Persian | English used | Note |
|---|---|---|
| سازمان | Organization | The multi-tenant unit |
| مدیریت کاربران | User Management | |
| داده‌های پایه | Master Data | **(?)** "Reference Data" / "Lookups" |
| مکان | Locations | |
| گزارش‌ها | Reports | |
| داشبورد | Dashboard | |
| ورود به سامانه | Sign In | |

## Status values

These come from `utils/statusLabels.js` and appear in every status chip.

| Persian | English used |
|---|---|
| فعال / غیرفعال | Active / Inactive |
| در انتظار تایید | Pending Approval |
| تایید شده / رد شده | Approved / Rejected |
| برنامه‌ریزی‌شده | Planned |
| در حال انجام | In Progress |
| تکمیل شده / انجام شده | Completed / Done |
| لغو شده | Cancelled |
| در مأموریت | On Mission |
| در تعمیرگاه / در حال تعمیر | In Workshop / Under Repair |
| منقضی شده / نزدیک به انقضا | Expired / Expiring Soon |
| معوق | Overdue |
| نیازمند سرویس | Service Due |
| هشدار / هشدار جدی / هشدار آخر | Warning / Critical / Final Warning |
| فروخته‌شده | Sold |
| باک پر / باک پر نیست | Tank Full / Tank Not Full |
| مشروط | Conditional |

## How the catalogue works

`en.json` maps **Persian text → English text**. The Persian string in the source code *is*
the lookup key, so:

- A key missing from `en.json` renders as **Persian**, even in English mode. Nothing breaks;
  it just isn't translated yet.
- Persian needs no catalogue at all and cannot regress.
- To translate more of the app, add entries to `en.json` and wrap the matching source
  string in `t('...')`.

One consequence to know: if you **edit a Persian string in the code**, its `en.json` entry
stops matching and that string reverts to Persian. Change both together.
