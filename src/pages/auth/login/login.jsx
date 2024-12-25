import { NavLink } from "react-router-dom";
import AuthImage from "../../../assets/dogsAndCat.png";
import ArrowBtn from "../../../components/buttons/arrowBtn";
function Login() {
  return (
    <main className="px-10 lg:grid grid-cols-2 fixed top-20 place-items-center gap-10 lg:pr-36 ">
      <section className="hidden lg:block">
        <figure className="overflow-hidden   bg-red-400 ">
          <img
            src={AuthImage}
            alt=""
            className="w-full h-full hover:scale-105 transition-all "
            loading="lazy"
          />
        </figure>
      </section>

      <fieldset className="w-full ">
        <div className="flex flex-col">
            <ArrowBtn path={'/'}/>
          <legend className="text-2xl mb-5 font-bold drop-shadow text-primary-color">
            Login
          </legend>
        </div>

        <form
          action=""
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Entre your username"
            className="p-3 outline-none w-full ring-0 bg-slate-50 focus:ring-4 rounded focus:ring-primary-color"
          />
          <input
            type="password"
            placeholder="Entre your password"
            className="p-3 outline-none w-full ring-0 bg-slate-50 focus:ring-4 rounded focus:ring-primary-color"
          />
          <button
            type="submit"
            className="text-xl text-white bg-primary-color hover:bg-secondary-color rounded py-3 px-8"
          >
            Login
          </button>
          <div className="text-gray-700">
            Don`t have an account?
            <small className="font-semibold ">
              <NavLink to="/signup">Sign Up</NavLink>
            </small>
          </div>
        </form>
      </fieldset>
    </main>
  );
}

export default Login;
