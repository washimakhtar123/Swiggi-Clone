
export const Help = () => {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-center">Help & Support</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800">Frequently Asked Questions</h2>
          <ul className="mt-4 space-y-4">
            <li className="border-b pb-4">
              <h3 className="font-medium">How can I track my order?</h3>
              <p className="text-gray-600 mt-2">
                You can track your order from the "Orders" section in your account.
              </p>
            </li>
            <li className="border-b pb-4">
              <h3 className="font-medium">What payment methods do you accept?</h3>
              <p className="text-gray-600 mt-2">
                We accept credit/debit cards, net banking, and popular wallets.
              </p>
            </li>
            <li>
              <h3 className="font-medium">How can I contact customer support?</h3>
              <p className="text-gray-600 mt-2">
                Reach us at support@example.com or call us at +1 123-456-7890.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Help;