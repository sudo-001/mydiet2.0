import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.myDiet.app',
  appName: 'MyDiet',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
