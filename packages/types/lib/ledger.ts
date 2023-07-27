// Copyright 2023 @paritytech/polkadot-live authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type LedgerTask = "get_address";

export interface LedgerResponse {
  ack: string;
  statusCode: string;
}
