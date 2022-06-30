import getAuthSession from '../lib/session';

const ProtectedSSRoute = ({ authenticated, user }) => {
    if (!authenticated) {
        return (
            <div>
                <span>You are not authenticated :(</span>
            </div>
        );
    }
    return (
        <div>
            <span>You are authenticated as: {user} :)</span>
        </div>
    );
};

export function getServerSideProps(ctx) {
    const authSession = getAuthSession(ctx);
    if (!authSession) {
        return {
            props: {
                authenticated: false,
                redirect: {
                    destination: "/login",
                    permanent: false,
                  },
            },
        };
    }

    return {
        props: {
            authenticated: true,
            user: authSession.user,
        },
    };
}

export default ProtectedSSRoute;