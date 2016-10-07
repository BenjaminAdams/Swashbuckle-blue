using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace Swashbuckle.Annotations.AttributeTags
{
    /// <summary>
    /// Defined validations with Regular Experssions
    /// </summary>
    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Property)]
    public class DefinedValidationAttribute : Attribute
    {
        /// <summary>
        /// Regular expersssion patterns
        /// </summary>
        private static Dictionary<ValidationType, string> RegexPatterns = new Dictionary<ValidationType, string>()
        {
            {ValidationType.Country,@"^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|UK|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW)$"},
            {ValidationType.Currency,@"^(AED|AFN|ALL|AMD|ANG|AOA|ARS|AUD|AWG|AZN|BAM|BBD|BDT|BGN|BHD|BIF|BMD|BND|BOB|BOV|BRL|BSD|BTN|BWP|BYR|BZD|CAD|CDF|CHE|CHF|CHW|CLF|CLP|CNY|COP|COU|CRC|CUC|CUP|CVE|CZK|DJF|DKK|DOP|DZD|EGP|ERN|ETB|EUR|FJD|FKP|GBP|GEL|GHS|GIP|GMD|GNF|GTQ|GYD|HKD|HNL|HRK|HTG|HUF|IDR|ILS|INR|IQD|IRR|ISK|JMD|JOD|JPY|KES|KGS|KHR|KMF|KPW|KRW|KWD|KYD|KZT|LAK|LBP|LKR|LRD|LSL|LTL|LVL|LYD|MAD|MDL|MGA|MKD|MMK|MNT|MOP|MRO|MUR|MVR|MWK|MXN|MXV|MYR|MZN|NAD|NGN|NIO|NOK|NPR|NZD|OMR|PAB|PEN|PGK|PHP|PKR|PLN|PYG|QAR|RON|RSD|RUB|RWF|SAR|SBD|SCR|SDG|SEK|SGD|SHP|SLL|SOS|SRD|SSP|STD|SVC|SYP|SZL|THB|TJS|TMT|TND|TOP|TRY|TTD|TWD|TZS|UAH|UGX|USD|USN|USS|UYI|UYU|UZS|VEF|VND|VUV|WST|XAF|XAG|XAU|XBA|XBB|XBC|XBD|XCD|XDR|XFU|XOF|XPD|XPF|XPT|XSU|XTS|XUA|XXX|YER|ZAR|ZMW|ZWL)$"},
            {ValidationType.Region,@"^(US|LA|EMEA|APJ|CA)$"},
            {ValidationType.Language,@"^(AA|AB|AE|AF|AK|AM|AN|AR|@AS|AV|AY|AZ|BA|BE|BG|BH|BI|BM|BN|BO|BR|BS|CA|CE|CH|CO|CR|CS|CU|CV|CY|DA|DE|DV|DZ|EE|EL|EN|EO|ES|ET|EU|FA|FF|FI|FJ|FO|FR|FY|GA|GD|GL|GN|GU|GV|HA|HE|HI|HO|HR|HT|HU|HY|HZ|IA|ID|IE|IG|II|IK|IO|@IS|IT|IU|JA|JV|KA|KG|KI|KJ|KK|KL|KM|KN|KO|KR|KS|KU|KV|KW|KY|LA|LB|LG|LI|LN|LO|LT|LU|LV|MG|MH|MI|MK|ML|MN|MO|MR|MS|MT|MY|NA|NB|ND|NE|NG|NL|NN|NO|NR|NV|NY|OC|OJ|OM|OR|OS|PA|PI|PL|PS|PT|QU|RM|RN|RO|RU|RW|SA|SC|SD|SE|SG|SH|SI|SK|SL|SM|SN|SO|SQ|SR|SS|ST|SU|SV|SW|TA|TE|TG|TH|TI|TK|TL|TN|TO|TR|TS|TT|TW|TY|UG|UK|UR|UZ|VE|VI|VO|WA|WO|XH|YI|YO|ZA|ZH|ZU)$"},
            {ValidationType.Url,@"((http(s)?\:\/\/)(?:[-a-z0-9]+\.)[-a-z0-9]+.*)"},
            {ValidationType.Email,@"^\w+([-.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"},
            {ValidationType.IPAddress,@"^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$"}
        };

        /// <summary>
        /// Initializes a new instance of the <see cref="DefinedValidationAttribute"/> class.
        /// </summary>
        /// <param name="input">The input.</param>
        public DefinedValidationAttribute(ValidationType input)
        {
            this.KeyName = input;
        }

        /// <summary>
        /// Key name to get regex pattern from config file.
        /// </summary>
        /// <value>
        /// The name of the key.
        /// </value>
        public ValidationType KeyName { get; private set; }

        /// <summary>
        /// Validates the specified key name.
        /// </summary>
        /// <param name="keyName">Name of the key.</param>
        /// <param name="input">The input.</param>
        /// <returns></returns>
        public static bool Validate(ValidationType keyName, string input)
        {
            if (string.IsNullOrWhiteSpace(input) == true) return false;

            return Regex.IsMatch(input, RegexPatterns[keyName], RegexOptions.IgnoreCase);
        }
    }

    public enum ValidationType
    {
        Country,
        Currency,
        Region,
        Language,
        Url,
        Email,
        IPAddress
    }
}