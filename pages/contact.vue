<template>
  <section>
    <FadeLeft class="mx-auto mb-3">
      <h2>Send us stuff</h2>
    </FadeLeft>
    <form
      action="https://api.staticforms.xyz/submit"
      method="post"
      class="flex flex-col w-full max-w-xl mx-auto"
    >
      <FadeUp>
        <div class="flex flex-col w-full max-w-xl">
          <div class="flex flex-col px-4 py-6 rounded mb-6 bg-primary">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              required
              class="form autofill:bg-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              required
              class="form"
            />
            <textarea
              name="message"
              placeholder="MESSAGE"
              required
              class="form pb-0 mb-0"
            ></textarea>
            <input type="text" name="honeypot" style="display: none" />
            <input
              type="hidden"
              name="accessKey"
              value="22a3b07d-2c43-4376-8aeb-516265e22d93"
            />
            <input type="hidden" name="subject" value="Contact Form - YNK" />
            <input type="hidden" name="replyTo" value="@" />
            <input
              type="hidden"
              name="redirectTo"
              value="https://yesnoklub.netlify.app/sent"
            />
          </div>
          <button class="submitButton" type="submit">SUBMIT</button>
        </div>
      </FadeUp>
    </form>
  </section>
</template>
