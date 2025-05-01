import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { Link, redirect } from "react-router";
import { loginWithGoogle } from "~/appwrite/auth";
import { account } from "~/appwrite/client";

export async function clientLoader() {
    try {
        const user = await account.get();
        if(user) return redirect("/");
    } catch (error) {
        console.error(`clientLoader: ${error}`)
    }
}

const SignIn = () => {

  return (
    <main className="auth">
      <section className="size-full glassmorphism flex-center px-6">
        <div className="sign-in-card">
          <header className="header">
            <Link to="/">
              <img
                src="/assets/icons/logo.svg"
                alt="logo"
                className="size-[30px]"
              />
            </Link>
            <h1 className="p-28-bold text-dark-100">Travers Co.</h1>
          </header>
          <article>
            <h2 className="p-28-semibold  text-dark-100 text-center">
              Start your Travel Journey
            </h2>
            <p className="text-center text-gray-100 p-18-reqular !leading-7">
              Sign in with Google to manage destinations, itienaries and, user
              activities with ease
            </p>
          </article>
          <ButtonComponent
            onClick={loginWithGoogle}
            type="button"
            iconCss="e-search-icon"
            className="button-class !w-full !h-11"
          >
            <img
              src="/assets/icons/google.svg"
              alt="google"
              className="size-5"
            />
            <span className="p-18-semibold text-white">Sign in with Google</span>
          </ButtonComponent>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
