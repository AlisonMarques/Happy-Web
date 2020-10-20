interface OrphanageDetail {
   latitude: number;
   longitude: number;
   name: string;
   about: string;
   instructions: string;
   opening_hours: string;
   open_on_weekends: string;
   images: Array<{
      id: number;
      url: string;
   }>;
}

export default OrphanageDetail;
