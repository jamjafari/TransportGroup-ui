// src/services/dashboard/DashboardSearchService.js — بازنویسی

import * as vehicleApi from '@/modules/fleet/vehicles/api/vehicleApi';
import * as driverApi from '@/modules/drivers/api/driverApi';

class DashboardSearchService {
  async getVehicles() {
    const response = await vehicleApi.getVehicles();

    if (!response?.success) return [];

    return response.data.map((v) => ({
      id: v.id,
      title: `${v.plateNumber} — ${v.brand} ${v.model}`,
    }));
  }

  async getDrivers() {
    const response = await driverApi.getDrivers();

    if (!response?.success) return [];

    return response.data.map((d) => ({
      id: d.id,
      title: `${d.firstName} ${d.lastName}`,
    }));
  }

  async getMissions() {
    // فعلاً mock — اگه لازم شد بعداً وصل می‌کنیم
    return [
      { id: 1, title: 'تهران - تبریز' },
      { id: 2, title: 'تهران - بندرعباس' },
      { id: 3, title: 'تهران - مشهد' },
    ];
  }

  async getFuelTypes() {
    return [
      { id: 'Diesel', title: 'گازوئیل' },
      { id: 'Gasoline', title: 'بنزین' },
    ];
  }

  async getExpenseTypes() {
    return [
      { id: 'Maintenance', title: 'تعمیرات' },
      { id: 'Insurance', title: 'بیمه' },
      { id: 'Tire', title: 'لاستیک' },
    ];
  }

  async getInsuranceStatuses() {
    return [
      { id: 'Active', title: 'فعال' },
      { id: 'Expired', title: 'منقضی شده' },
    ];
  }

  async getServiceStatuses() {
    return [
      { id: 'Required', title: 'نیازمند سرویس' },
      { id: 'Completed', title: 'انجام شده' },
    ];
  }

  async getStatusColors() {
    return [
      { id: 'success', title: 'سبز' },
      { id: 'warning', title: 'زرد' },
      { id: 'error', title: 'قرمز' },
      { id: 'primary', title: 'آبی' },
    ];
  }
}

export default new DashboardSearchService();
