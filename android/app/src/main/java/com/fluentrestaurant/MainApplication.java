package com.fluentrestaurant;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.microsoft.azure.mobile.react.crashes.RNCrashesPackage;
import com.microsoft.codepush.react.CodePush;
import com.microsoft.azure.mobile.react.analytics.RNAnalyticsPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNCrashesPackage(MainApplication.this, getResources().getString(R.string.mobileCenterCrashes_whenToSendCrashes)),
            new CodePush(getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey), getApplicationContext(), BuildConfig.DEBUG),
            new RNAnalyticsPackage(MainApplication.this, getResources().getString(R.string.mobileCenterAnalytics_whenToEnableAnalytics)),
            new VectorIconsPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
