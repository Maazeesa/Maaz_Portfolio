# Mo Maaz Portfolio - GitHub Pages Setup

This folder is the complete standalone website. It does not require ChatGPT, paid hosting, Node.js, or a database.

## 1. Publish it free on GitHub Pages

1. Create or sign in to your personal GitHub account at https://github.com.
2. Click **New repository**.
3. Name it exactly `YOUR-USERNAME.github.io` using your real GitHub username.
4. Set the repository to **Public** and create it.
5. Click **uploading an existing file**.
6. Upload the CONTENTS of this folder - not the outer `Mo-Maaz-Portfolio` folder.
7. Add a message such as `Publish portfolio`, then click **Commit changes**.
8. Open **Settings > Pages**.
9. Under **Build and deployment**, choose **Deploy from a branch**.
10. Select branch **main**, folder **/(root)**, and click **Save**.

Your free address will be `https://YOUR-USERNAME.github.io`. Publication can take several minutes.

## 2. Add a personal domain

1. Buy a domain such as `momaaz.com` from a registrar of your choice.
2. In GitHub, open **Repository > Settings > Pages**.
3. Enter the domain in **Custom domain** and save it.
4. At your domain provider, add the DNS records shown by GitHub.
5. For a root domain, GitHub currently documents these A records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
6. Add a `CNAME` record for `www` pointing to `YOUR-USERNAME.github.io`.
7. Return to GitHub Pages and enable **Enforce HTTPS** when it becomes available.

DNS changes can take up to 24 hours.

## 3. Make future changes

Most portfolio text is inside `content.js`.

1. Open `content.js` in the GitHub repository.
2. Click the pencil icon.
3. Change only the text inside quotation marks.
4. Click **Commit changes**.
5. GitHub republishes the website automatically.

Keep quotation marks and commas in place. Do not rename labels such as `title`, `projects`, or `experience`.

## 4. Replace documents or photograph

Upload the replacement into the `assets` folder using the same filename:

- Profile photo: `mo-maaz-profile.jpg`
- CV: `Mo-Maaz-CV.pdf`
- CFO recommendation: `Mo-Maaz-Recommendation-CFO-Public.pdf`
- Chief Mining Engineer recommendation: `Mo-Maaz-Recommendation-Chief-Mining-Engineer-Public.pdf`

Using the same filename means no coding changes are required.

## Privacy warning

Everything uploaded to this public repository and website can be viewed or downloaded by anyone. The included recommendation letters are privacy-safe copies. Do not replace them with the original unredacted scans. Your CV contains your own telephone number and email address.
