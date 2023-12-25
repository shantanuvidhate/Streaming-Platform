import prismadb from "@/lib/prismadb";
import getSession from "./getSession";

const getCurrentUser = async () => {
    try {
        const session = await getSession();
        console.log(session);

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prismadb.user.findUnique({
            where: {
                email: session.user.email as string
            }
        });
        if (!currentUser) {
            return null;
        }
        return currentUser;
    } catch (error) {
        return error;
    }
};
export default getCurrentUser;