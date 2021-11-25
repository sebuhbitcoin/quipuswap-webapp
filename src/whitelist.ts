export enum Network {
  Main = "NetXdQprcVkpaWU",
  Florence = "NetXxkAx4woPLyu",
  Edo2net = "NetXSgo1ZT2DRUG",
}

export interface WhitelistedToken {
  network: Network;
  type: "fa1.2" | "fa2";
  contractAddress: string;
  fa2TokenId?: number;
  metadata?: WhitelistedTokenMetadata;
}

export type WhitelistedTokenMetadata = {
  decimals: number;
  symbol: string;
  name: string;
  thumbnailUri: string;
};

export const TOKEN_WHITELIST: WhitelistedToken[] = [
  /**
   * Mainnet
   */

  {
    network: Network.Main,
    type: "fa2",
    fa2TokenId: 0,
    contractAddress: "KT1XTxpQvo7oRCqp85LikEZgAZ22uDxhbWJv",
  },
  /*gif
  */
  {
    network: Network.Main,
    type: "fa2",
    fa2TokenId: 0,
    contractAddress: "KT1ErKVqEhG9jxXgUG2KGLW3bNM7zXHX8SDF",
  },
/*uno
  */
{
  network: Network.Main,
  type: "fa2",
  fa2TokenId: 1,
  contractAddress: "KT1ErKVqEhG9jxXgUG2KGLW3bNM7zXHX8SDF",
},
/*MIN
*/
{
  network: Network.Main,
  type: "fa2",
  fa2TokenId: 2,
  contractAddress: "KT1ErKVqEhG9jxXgUG2KGLW3bNM7zXHX8SDF",
},
/*ENR
*/
{
  network: Network.Main,
  type: "fa2",
  fa2TokenId: 3,
  contractAddress: "KT1ErKVqEhG9jxXgUG2KGLW3bNM7zXHX8SDF",
},
/*MCH
*/


  /**
   * Florence
   */

  {
    network: Network.Florence,
    type: "fa2",
    contractAddress: "KT1DaKxkR1LdnXW1tr7yozdwEAiSQDpCLUBj",
    fa2TokenId: 0,
  },
  {
    network: Network.Florence,
    type: "fa1.2",
    contractAddress: "KT1P3RGEAa78XLTs3Hkpd1VWtryQRLDjiXqF",
  },
  {
    network: Network.Florence,
    type: "fa1.2",
    contractAddress: "KT198WVepFnjQtx9HUhuKc2x8gUt9z2fvyv6",
  },
  // Old
  {
    network: Network.Florence,
    type: "fa1.2",
    contractAddress: "KT1FXDTQb1o7Q7HecuxaWQ18XyHTsRrzuaZs",
  },
  {
    network: Network.Florence,
    type: "fa1.2",
    contractAddress: "KT1CMbwrQodEYFpdJmk8pzN8SzieupG6ZrZE",
  },
  {
    network: Network.Florence,
    type: "fa2",
    contractAddress: "KT1VCczKAoRQJKco7NiSaB93PMkYCbL2z1K7",
    fa2TokenId: 0,
  },
  {
    network: Network.Florence,
    type: "fa2",
    contractAddress: "KT1CdFLoqESYe3qBCgM7LZUVmqYZFEabzwyS",
    fa2TokenId: 0,
  },
];
