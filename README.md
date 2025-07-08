
# Domain Inspector 🚀

A simple command-line tool to inspect a domain’s WHOIS data, SSL certificate info, and basic SEO metadata.

---

## 📦 Features

- ✅ **WHOIS lookup** – retrieves registrar, creation, and expiration dates using `whois-json`
- 🔐 **SSL certificate check** – validates SSL, issuer info, and days remaining via `ssl-checker`
- 🌐 **SEO snapshot** – fetches page title and meta description using `axios` + `cheerio`
- 🎨 **Pretty output** – color-coded CLI output via `chalk`
- 🔄 **Built-in retry/fail handling** – handles network and parsing errors gracefully

---

## 🛠️ Built With

- [whois-json](https://www.npmjs.com/package/whois-json) – fetch WHOIS data
- [ssl‑checker](https://www.npmjs.com/package/ssl‑checker) – SSL/TLS certificate details
- [axios](https://www.npmjs.com/package/axios) – HTTP requests
- [cheerio](https://www.npmjs.com/package/cheerio) – HTML parsing
- [chalk](https://www.npmjs.com/package/chalk) – colored console output

---


## ⚙️ Installation

```bash
npm install -g domain-inspector



