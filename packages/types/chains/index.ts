// Copyright 2023 @paritytech/polkadot-live authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { PolkadotAccountState } from "./polkadot";

// Supported chains as string literals.
export type ChainID = "Polkadot";

// Supported chain states.
export type SomeChainState = PolkadotAccountState;

export type ChainStatus = "connecting" | "connected" | "disconnected";
