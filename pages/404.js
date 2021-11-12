
import {  useContext } from "react";
import { useRouter } from "next/router";

import { cartcontext } from "../context/store";
import * as types from "../context/types";
export default function Custom404() {
    const { state, dispatch } = useContext(cartcontext);
dispatch({
    type:types.LOGOUT
})
    return (
        <>
            <h1>404 - Page Not Found</h1>
        </>
    )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
// export const getServerSideProps = async (ctx) => {
   

//     return { redirect: { destination: '/', permanent: true, },}
// }