#!/usr/bin/env node

import whois from 'whois-json';
import axios from 'axios';
import * as cheerio from 'cheerio';
import sslChecker from 'ssl-checker';
import chalk from 'chalk';
import { exec } from 'child_process';

const domain = process.argv[2];
if (!domain) {
  console.log(chalk.red("Please provide a domain name.\nExample: domain-inspector google.com"));
  process.exit(1);
}

console.log(chalk.blue.bold(`Inspecting: ${domain}\n`));

(async () => {
  try {

    // below lines will check and log in the console about registrant information of provided domain more
    const whoisData = await whois(domain);
    console.log(chalk.yellow("WHOIS:"));
    console.log(`Registrar: ${whoisData.registrantName || 'N/A'}`);
    console.log(`Created: ${whoisData.creationDate || 'N/A'}`);
    console.log(`Expires: ${whoisData.registrarRegistrationExpirationDate || 'N/A'}`);


// ssl information

    const ssl = await sslChecker(domain, { method: "GET", port: 443 });
    console.log(`Valid: ${ssl.valid}`);
    console.log(`Issuer: ${ssl.issuer}`);
    console.log(`Expires in: ${ssl.daysRemaining} days`);



    // seo tags 

    const response = await axios.get(`https://${domain}`);
    const $ = cheerio.load(response.data);
    console.log(chalk.cyan("\nSEO Snapshot"));
    console.log(`Title: ${$('title').text() || 'N/A'}`);
    console.log(`Meta Description: ${$('meta[name="description"]').attr('content') || 'N/A'}`);
  } catch (e) {
    console.error(chalk.red("Something went wrong:"), e.message);
  }
})();
