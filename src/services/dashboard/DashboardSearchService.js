class DashboardSearchService {
  async getVehicles() {
    return [
      {
        id: 1,
        title: 'کامیون ولوو FH500',
      },
      {
        id: 2,
        title: 'کامیون اسکانیا R450',
      },
      {
        id: 3,
        title: 'تریلی بنز Actros',
      },
    ];
  }

  async getDrivers() {
    return [
      {
        id: 1,
        title: 'علی احمدی',
      },
      {
        id: 2,
        title: 'محمد رضایی',
      },
      {
        id: 3,
        title: 'مهدی کریمی',
      },
    ];
  }

  async getMissions() {
    return [
      {
        id: 1,
        title: 'تهران - تبریز',
      },
      {
        id: 2,
        title: 'تهران - بندرعباس',
      },
      {
        id: 3,
        title: 'تهران - مشهد',
      },
    ];
  }

  async getFuelTypes() {
    return [
      {
        id: 'Diesel',
        title: 'گازوئیل',
      },
      {
        id: 'Gasoline',
        title: 'بنزین',
      },
    ];
  }

  async getExpenseTypes() {
    return [
      {
        id: 'Maintenance',
        title: 'تعمیرات',
      },
      {
        id: 'Insurance',
        title: 'بیمه',
      },
      {
        id: 'Tire',
        title: 'لاستیک',
      },
    ];
  }

  async getInsuranceStatuses() {
    return [
      {
        id: 'Active',
        title: 'فعال',
      },
      {
        id: 'Expired',
        title: 'منقضی شده',
      },
    ];
  }

  async getServiceStatuses() {
    return [
      {
        id: 'Required',
        title: 'نیازمند سرویس',
      },
      {
        id: 'Completed',
        title: 'انجام شده',
      },
    ];
  }
  async getStatusColors() {
    return [
      {
        id: 'success',
        title: 'سبز',
      },
      {
        id: 'warning',
        title: 'زرد',
      },
      {
        id: 'error',
        title: 'قرمز',
      },
      {
        id: 'primary',
        title: 'آبی',
      },
    ];
  }
}

export default new DashboardSearchService();
