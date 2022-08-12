import {getSdk} from "../generated/graphql";

const sdk = getSdk(null /*TODO: add graphql client*/);

const {
  shop: {name},
} = await sdk.GetShopName();

console.log(name);
