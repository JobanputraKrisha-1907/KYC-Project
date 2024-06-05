// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    NamePattern: RegExp("^[A-Z]{1}[^0-9]+[A-Za-z] [A-Za-z]{1}[^0-9]+[A-Za-z]$"),
    MobilePattern: new RegExp("[0-9]{10}$"),
    EmailPattern: new RegExp("^[a-z0-9._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,5}$"),
    ClientNamePattern: new RegExp("^[A-Z]{1}[^0-9]+[A-Za-z] [A-Za-z]{1}[^0-9]+[A-Za-z]$"),
    PanPattern: new RegExp("([A-Z]){5}([0-9]){4}([A-Z]){1}"),
    PinPattern: new RegExp("[0-9]{6}"),
    Banknamepattern: new RegExp("^[^0-9@$!%*?&]+$"),
    IFSCpattern: new RegExp("^([A-Z]{4})0([A-Z0-9]{6})$"),
    MICRpattern: new RegExp("^[0-9]{9}$"),
    Numberpattern: new RegExp("^[0-9]{9,18}$"),
    Holderpattern: new RegExp("^((?:[A-Za-z]+ ?){1,3})$")
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
