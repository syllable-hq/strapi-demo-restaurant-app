/* /lib/apollo.js */

import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";

const config = {
  link: new HttpLink({
    uri: `${process.env.API_URL || 'http://localhost:1337'}/graphql`, // Server URL (must be absolute)
  })
};
export default withData(config);