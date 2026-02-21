## Kontext a očekávání (pro automatizaci)

### URL registrace
- Path (relativní): `/register`
- Full URL: `https://my-qbgzo-qacs3.vgabriel.personal.purple-lab.dev/register` 

## Selektory (data-testid)

### Form fields
- Registration Form: `individualRegistrationForm` → selector: `[data-testid="individualRegistrationForm"]`
- First name: `firstName` → selector: `[data-testid="firstName"]`
- Last name: `lastName` → selector: `[data-testid="lastName"]`
- Email: `TextInput` → selector: `[data-testid="TextInput"]`
- Country: chybí `data-testid`
  - Komponenta: React-Select (`input#react-select-3-input`, `role="combobox"`)
  - Dočasný Cypress selector (křehké):
    - najít pole podle textu labelu “Country of Residence” a uvnitř vzít `input[role="combobox"]`
  - Pozn.: pro stabilní automatizaci doplnit `data-testid="country"` na wrapper/control
- Notice: `Notice` → selector: `[data-testid="Notice"]`
- Dial code: `dialCode` → selector: `[data-testid="dialCode"]`
- Phone: `phoneNumber` → selector: `[data-testid="phoneNumber"]`
- Password: `password` → selector: `[data-testid="password"]`
- Paragraph: `Paragraph` → selector: `[data-testid="Paragraph"]`

### Actions
- Submit (“Start trending”): `Button` → selector: `[data-testid="Button"]`

### Optional
- Checkbox_Affiliate code: `Checkbox` → selector: `[data-testid="Checkbox"]`
- Checkbox_Agree conditions: `Checkbox` → selector: `[data-testid="Checkbox"]`
  - Test ids pro checkboxy nejsou unikátní, test na tom bude padat - je potřeba rozlišit, např.: data-testid="checkboxAffiliate" a data-testid="checkboxConditions"
- Show/hide password Icon: `Icon` → selector: `[data-testid="Icon"]`

### Validation / errors (recommended)
- Email required error: `reg_email_error` → selector: `[data-testid="reg_email_error"]`
- First name required error: `reg_firstName_error` → selector: `[data-testid="reg_firstName_error"]`
