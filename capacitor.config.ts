import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.oldworldbuilder.builder',
  appName: 'Old World Builder',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
