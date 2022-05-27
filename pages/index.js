import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";

function HomePage({ session }) {
  const { user } = session;
  return (
    <div>
      {JSON.stringify(user)}
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <img src={user.image} alt={user.name} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};

export default HomePage;
