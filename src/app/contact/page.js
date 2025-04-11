export default function Contact() {
    return (
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-xl w-full">
          <h1 className="text-3xl font-serif mb-6 text-center">Contact</h1>
          <p className="text-neutral-700 text-center mb-8">
            For inquiries, reflections, or digital whispers — feel free to reach out.
          </p>
          <form
            action="https://formsubmit.co/qestor.inquiry@gmail.com"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://your-domain.com/thanks" />
  
            <input
              type="text"
              name="name"
              required
              placeholder="Your name (optional)"
              className="w-full p-2 border border-neutral-300 rounded"
            />
  
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full p-2 border border-neutral-300 rounded"
            />
  
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Your message..."
              className="w-full p-2 border border-neutral-300 rounded"
            ></textarea>
  
            <button
              type="submit"
              className="w-full bg-neutral-900 text-white py-2 rounded hover:bg-neutral-800 transition"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    );
  }
  