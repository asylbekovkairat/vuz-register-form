import { AuthForm } from "@/features/AuthForm";

const Register = () => {
  return (
    <section
      className="p-5 mt-6 h-auto rounded-xl flex flex-col tablet:p-8"
      style={{ boxShadow: "-1px 3px 6px #c9c4c4" }}
    >
      <AuthForm />
    </section>
  );
};

export default Register;
