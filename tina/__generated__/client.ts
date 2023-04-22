import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '0ce5ff89420e3430c126827898c7f9fa975a9714', queries });
export default client;
  