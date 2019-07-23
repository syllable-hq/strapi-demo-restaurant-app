/* /lib/apollo.js */

import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";
import { env } from "../utils/constants";

const config = {
  link: new HttpLink({
    uri: `${env.API_URL}/graphql`, // Server URL (must be absolute)
  })
};
export default withData(config);