// flow-typed signature: c93dd3dd98b98a974a7d519a681da7ab
// flow-typed version: <<STUB>>/braintree-web_v^3.5.0
/**
 * This is an autogenerated libdef stub for:
 *
 *   'braintree-web'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare type BraintreeClient = any;
declare type BraintreeError = any;

declare module 'braintree-web' {
  declare module.exports: any;
}

declare module 'braintree-web/client' {
  declare function create(
    options: { authorization: string },
    callback: (error: BraintreeError, data: BraintreeClient) => void
  ): void;
}

declare module 'braintree-web/paypal' {
  declare type PayPalFlow = 'checkout' | 'vault';
  declare type Address = {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    countryCode: string;
  };

  declare type ShippingAddress = Address & { recipientName: string };

  declare type PayPalAccountDetails = {
    email: string;
    payerId: string;
    firstName: string;
    lastName: string;
    countryCode: ?string;
    phone: ?string;
    billingAddress: Address;
    shippingAddress: ShippingAddress;
  };

  declare type PayPalTokenizeReturn = {
    // A handle to close the PayPal checkout flow.
    close: () => void;

    // A handle to focus the PayPal checkout flow.
    // Note that some browsers (notably iOS Safari) do not support focusing popups.
    // Firefox requires the focus call to occur as the result of a user interaction, such as a button click.
    focus: () => void;
  };

  declare type PayPalTokenizePayload = {
    nonce: string;
    type: 'PayPalAccount';
    details: PayPalAccountDetails;
  };

  declare type PaypalTokenizeOptions = {
    flow: 'checkout' | 'vault';
    offerCredit?: boolean;
    currency?: string;
    displayName?: string;
    locale?: 'en_US' | 'da_DK' | 'de_DE' | 'en_AU' | 'en_GB' | 'en_US' | 'es_ES' | 'fr_CA' | 'fr_FR' | 'id_ID' | 'it_IT' | 'ja_JP' | 'ko_KR' | 'nl_NL' | 'no_NO' | 'pl_PL' | 'pt_BR' | 'pt_PT' | 'ru_RU' | 'sv_SE' | 'th_TH' | 'zh_CN' | 'zh_HK' | 'and zh_TW';
    enableShippingAddress?: boolean;
    shippingAddressEditable?: boolean;
    shippingAddressOverride?: ShippingAddress & { phone?: string };
    // Use this option to set the description of the preapproved payment agreement
    // visible to customers in their PayPal profile during Vault flows.
    // Max 255 characters.
    billingAgreementDescription?: string;
  };

  declare type PaypalCheckoutFlowOptions = {
    intent?: string;
    userAction?: string;
    amount: string | number;
  };

  declare type PaypalVaultFlowOptions = {
    amount?: string | number;
  };


  declare type PayPalInstance = {
    teardown: (callback?: (error: BraintreeError) => void) => void;
    tokenize: (options: PaypalCheckoutFlowOptions | PaypalVaultFlowOptions, callback: (error: ?BraintreeError, payload: PayPalTokenizePayload) => void) => PayPalTokenizeReturn;
  };

  declare function create(
    options: { client: BraintreeClient },
    callback: (error: ?BraintreeError, data: PayPalInstance) => void
  ): void;
}

declare module 'braintree-web/hosted-fields' {
  declare type HostedFieldsTokenizePayload = {
    nonce: string;
    details: {
      cardType: string;
      lastTwo: string;
    };
    description: string;
    type: 'CreditCard';

  };

  declare type HostedFieldsInstance = {
    tokenize: (
      options: { vault?: boolean },
      callback: (error: BraintreeError, data: HostedFieldsTokenizePayload) => void
    ) => void;
    teardown: (callback?: () => void) => void;
    on: (eventType: string, callback: (event:any) => void) => void;
  };

  declare function create(
    options: {
      client: BraintreeClient;
      fields: Object;
      styles: Object;
    },
    callback: (error: BraintreeError, data: HostedFieldsInstance) => void
  ): void;
}


/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module 'braintree-web/american-express' {
  declare module.exports: any;
}

declare module 'braintree-web/apple-pay' {
  declare module.exports: any;
}

declare module 'braintree-web/client' {
  declare module.exports: any;
}

declare module 'braintree-web/data-collector' {
  declare module.exports: any;
}

declare module 'braintree-web/three-d-secure' {
  declare module.exports: any;
}

declare module 'braintree-web/unionpay' {
  declare module.exports: any;
}

declare module 'braintree-web/us-bank-account' {
  declare module.exports: any;
}
