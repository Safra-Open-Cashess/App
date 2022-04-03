using System;
using Android.App;
using Android.OS;
using Android.Runtime;
using Android.Views;
using AndroidX.AppCompat.Widget;
using AndroidX.AppCompat.App;
using Android.Webkit;
using Google.Android.Material.FloatingActionButton;
using Google.Android.Material.Snackbar;
using Xamarin.Essentials;

namespace SafraOpenCashless{

    [Activity(Theme = "@style/AppTheme", MainLauncher = false)]
    public class MainActivity : AppCompatActivity{

        private string url = "https://opencashless.wilson.eng.br/app";
        public WebView webview;

        protected override void OnCreate(Bundle savedInstanceState){

            base.OnCreate(savedInstanceState);

            Platform.Init(this, savedInstanceState);

            SetContentView(Resource.Layout.activity_main);

            webview = FindViewById<WebView>(Resource.Id.webView);

            webview.SetWebViewClient(new SOCWebViewClient(url));

            WebView.SetWebContentsDebuggingEnabled(true);

            webview.Settings.JavaScriptEnabled = true;
            webview.Settings.DomStorageEnabled = true;
            webview.Settings.CacheMode = CacheModes.Normal;
            webview.Settings.MediaPlaybackRequiresUserGesture = false;
            webview.LoadUrl(url);

        }

        public override void OnBackPressed() {
            if(webview.CanGoBack()) {
                webview.GoBack();
            } else {
                base.OnBackPressed();
            }
        }

    }

    public class SOCWebViewClient : WebViewClient {

        private string url;

        public SOCWebViewClient(string url) {
            this.url = url;
        }

        [System.Obsolete]
        public override bool ShouldOverrideUrlLoading(WebView view, string _url) {
            if(url.StartsWith(url)) {
                return false;
            } else {
                Launcher.OpenAsync(_url);
                return true;
            }
        }

        public override void OnPageFinished(WebView view, string url) {
            base.OnPageFinished(view, url);

            if(view.Visibility != ViewStates.Visible) {
                view.Visibility = ViewStates.Visible;
            }
        }

    }

}
