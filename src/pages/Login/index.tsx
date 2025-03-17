import { LoginForm } from '../../components/auth/LoginForm';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="bg-white md:w-1/2 flex flex-col items-center justify-center p-8 text-white">
        <div className="max-w-md text-center">
          <img src="logo_sagu_extended.png" alt="" />
        </div>
      </div>

      <div className="md:w-1/2 flex items-center justify-center p-4 md:p-8 bg-sagu-primary">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
