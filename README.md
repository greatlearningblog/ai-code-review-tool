# AI-Based Code Review Tool

This project is an AI-powered code review tool built using Node.js, Express.js, and OpenAI’s GPT API. It allows users to:
- Sign up and log in securely.
- Submit source code for analysis.
- Receive a detailed review report highlighting errors, performance issues, security vulnerabilities, and suggestions for improvements.
- Store and view past review reports.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)


## Overview

The AI-Based Code Review Tool enables developers to automatically analyze their source code using AI. After signing up and logging in, users can submit code via the API (or through the simple HTML UI). The AI generates a review report which is then saved in MongoDB for later reference.

## Features

- **AI-Powered Code Review:** Analyzes code for syntax errors, performance issues, security vulnerabilities, and best practices.
- **Detailed Review Reports:** Provides comprehensive suggestions and improvement tips.
- **User Authentication:** Secure signup and login with JWT.
- **Review History:** Stores and retrieves past review reports.
- **Multi-Language Support:** Reviews code written in various programming languages.

## Tech Stack

- **Node.js & Express.js:** Backend server and API framework.
- **OpenAI API:** AI-based code analysis.
- **MongoDB & Mongoose:** Database for storing users and review history.
- **JWT Authentication:** Secure user authentication.
- **HTML:** A basic frontend for code submission (optional).

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/ai-code-review-tool.git
   cd ai-code-review-tool

**View Other such Node.js Projects:** https://www.mygreatlearning.com/blog/top-node-js-projects/

