import { test, expect } from "@playwright/test";
const data = require("../../testdata/login.json")
const { LoginPage } = require('../../page-objects/login-pages/login.page').default;
const { ArticlePage } = require('../../page-objects/Articles/article.page').default;
const randomNumber = Math.floor(Math.random() * 9999);
const fullTitle = `Vtest${randomNumber}`;
const topicName = `test${randomNumber}`
const portalName = `eGain${randomNumber}`


