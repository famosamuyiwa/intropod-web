export default function DeleteAccount() {
  return (
    <section className="section legal" id="delete-account">
      <div className="container legal-grid">
        <div className="legal-copy">
          <p className="eyebrow">Delete Account</p>
          <h2>Request account and data deletion</h2>
          <p>
            This page is the official request path for account deletion, as
            required by the Apple App Store and Google Play. We handle every
            request with care and confirm each step before removing data.
          </p>
          <p>
            To begin, email hello@intropod.app with the subject line &quot;Delete
            my account&quot; and include the email address tied to your Intropod
            account.
          </p>
        </div>
        <div className="legal-cards">
          <div>
            <h3>1. Verify identity</h3>
            <p>
              We confirm you own the account by replying to the request email
              and may ask for additional verification if needed.
            </p>
          </div>
          <div>
            <h3>2. Confirm scope</h3>
            <p>
              We explain what will be deleted (profile, tiles, media, notes, and
              backups) and what may be retained for legal or security reasons.
            </p>
          </div>
          <div>
            <h3>3. Cancel subscriptions</h3>
            <p>
              We remind you to cancel any active subscriptions through the
              Apple App Store or Google Play before deletion to avoid future
              charges.
            </p>
          </div>
          <div>
            <h3>4. Delete data</h3>
            <p>
              Once confirmed, we remove your data from active systems and
              schedule deletion from backups. We will email you when the process
              is complete, typically within 30 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
