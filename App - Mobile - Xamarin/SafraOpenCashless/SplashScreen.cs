using Android.App;
using Android.OS;
using System.Threading.Tasks;

namespace SafraOpenCashless {

    [Activity(MainLauncher = true, NoHistory = true)]
    public class SplashScreen : Activity {

        protected async override void OnCreate(Bundle savedInstanceState) {

            base.OnCreate(savedInstanceState);

            SetContentView(Resource.Layout.splash_screen);

            await Task.Delay(1000);

            StartActivity(typeof(MainActivity));

        }

    }

}