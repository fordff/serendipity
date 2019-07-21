/*
 * Copyright (c) 2017-Present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { InjectionToken } from '@angular/core';

import { AuthRequiredFunction } from './auth-required-function';

export interface OktaConfig {
  clientId: string;
  code_challenge: string;
  code_challenge_method: string;
  issuer: string;
  onAuthRequired?: AuthRequiredFunction;
  redirectUri: string;
  responseType: string;
  scope: string;
  state: string;
  testing: {
    disableHttpsCheck: boolean
  };
}

export const OKTA_CONFIG = new InjectionToken<OktaConfig>('okta.config.angular');

/*

export interface TestingObject {
  disableHttpsCheck: boolean;
}

export interface OktaConfig {
  issuer?: string;
  redirectUri?: string;
  clientId?: string;
  scope?: string;
  responseType?: string;
  onAuthRequired?: AuthRequiredFunction;
  testing?: TestingObject;
}

*/
