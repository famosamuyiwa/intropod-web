export default function Privacy() {
  return (
    <section className="section legal" id="privacy">
      <div className="container legal-grid">
        <div className="legal-copy">
          <p className="eyebrow">Privacy Policy</p>
          <h2>Privacy Policy - Intropod</h2>
          <p>
            Effective Date: December, 2025
            <br />
            Owner: Olu Famosa, Sole Proprietor
            <br />
            Address: Brooklyn, New York, United States
            <br />
            Contact: support@intropod.com
          </p>
          <p>
            This Privacy Policy explains how Intropod ("Intropod," "we," "us,"
            or "our") collects, uses, shares, and protects your information when
            you use the Intropod mobile app and related services (the
            "Service").
          </p>
        </div>
        <div className="legal-cards">
          <div data-reveal>
            <h3>1. Information We Collect</h3>
            <p>
              <strong>Account Information:</strong> email address,
              authentication tokens, profile display name, username, avatar
              image, referral code, and account identifiers.
            </p>
            <p>
              <strong>User Content:</strong> photos you upload, tiles, side
              quests, quests, and related metadata (e.g., timestamps, labels).
            </p>
            <p>
              <strong>Device &amp; App Information:</strong> device type,
              operating system, app version, and basic device identifiers.
            </p>
            <p>
              <strong>Notifications Data:</strong> your push notification
              preference and device token (if you enable notifications).
            </p>
            <p>
              <strong>Payment/Subscription Information:</strong> we use
              RevenueCat to manage subscriptions. We do not receive your full
              payment card details.
            </p>
            <p>
              <strong>OAuth Login Data:</strong> if you sign in with Google or
              Apple, we receive the profile identifiers necessary to
              authenticate you.
            </p>
            <p>
              <strong>Google User Data Accessed:</strong> when you sign in with
              Google via Appwrite, we access only the minimal identifiers needed
              to authenticate your account.
            </p>
            <p>
              <strong>No Analytics or Crash Logging:</strong> we do not use
              third-party analytics or crash-reporting tools.
            </p>
          </div>
          <div data-reveal>
            <h3>2. How We Use Information</h3>
            <p>
              We use your information to provide and operate the Service (login,
              sync, storage, and display of your content), maintain your account
              and authenticate you, enable subscriptions and premium features,
              deliver push notifications if enabled, and improve app reliability
              and security.
            </p>
            <p>
              <strong>Google Data Usage:</strong> we use Google login data only
              to authenticate you and create or link your Intropod account via
              Appwrite. We do not use Google data for advertising or analytics.
            </p>
          </div>
          <div data-reveal>
            <h3>3. Sharing and Disclosure</h3>
            <p>
              We may share information with service providers such as Appwrite
              (authentication, database, file storage), RevenueCat (subscription
              management), Apple/Google OAuth (authentication providers), and
              Expo/Push Notification Services (to deliver notifications).
            </p>
            <p>
              We may also disclose information if required by law or to protect
              rights, safety, and security. We do not sell your personal data.
            </p>
          </div>
          <div data-reveal>
            <h3>4. User Content &amp; Visibility</h3>
            <p>
              Your photos and tiles are private to you. Intropod does not offer
              friend sharing features, and your content is not visible to other
              users.
            </p>
          </div>
          <div data-reveal>
            <h3>5. Data Storage</h3>
            <p>
              We store your account information and user content in our service
              infrastructure using Appwrite for authentication, database, and
              file storage. Access to stored data is restricted to authorized
              systems and service providers needed to operate the Service.
            </p>
          </div>
          <div data-reveal>
            <h3>6. Data Retention</h3>
            <p>
              We retain your data as long as your account is active or as needed
              to provide the Service. You can delete data and/or your account
              from the app. Deleting your account removes your stored data from
              our systems, subject to reasonable technical and legal
              limitations.
            </p>
          </div>
          <div data-reveal>
            <h3>7. Security</h3>
            <p>
              We take reasonable steps to protect your information, but no
              system is 100% secure. You use the Service at your own risk.
            </p>
          </div>
          <div data-reveal>
            <h3>8. Children&apos;s Privacy</h3>
            <p>
              The Service is intended for users age 10 and older. If you are
              under 13, you must have permission from a parent or guardian to
              use the Service. We do not knowingly collect personal data from
              children under 13 without parental consent. If you believe we have
              collected such data, contact us and we will delete it.
            </p>
          </div>
          <div data-reveal>
            <h3>9. International Users</h3>
            <p>
              We are based in the United States. If you access the Service from
              outside the U.S., you consent to transferring and processing your
              data in the U.S.
            </p>
          </div>
          <div data-reveal>
            <h3>10. Your Rights</h3>
            <p>
              Depending on your location, you may have rights to access,
              correct, delete, or export your personal data. Contact us at
              support@intropod.com to request help.
            </p>
          </div>
          <div data-reveal>
            <h3>11. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. If we make
              material changes, we will update the effective date and notify you
              within the app.
            </p>
          </div>
          <div data-reveal>
            <h3>12. Contact Us</h3>
            <p>Email: support@intropod.com</p>
            <p>Address: Brooklyn, New York, United States</p>
          </div>
        </div>
      </div>
    </section>
  );
}
