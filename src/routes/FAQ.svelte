<script lang="ts">
	import * as Accordion from "$lib/components/ui/accordion/index.js";

	interface FAQProps {
		question: string;
		answer: string;
		value: string;
	}

	const FAQList: FAQProps[] = [
		{
			question: "Is this class free?",
			answer: "Yes. It is free for all students 8-13",
			value: "item-1",
		},
		{
			question: "What age group is this class for?",
			answer: "This class is for ages 8-13",
			value: "item-2",
		},
		{
			question: "What time do the classes take place?",
			answer: "The time varies year from year and will be based on whenever most of our customers are free",
			value: "item-3",
		},
		{
			question: "Where are the classes held?",
			answer: "This information will be sent out once you are signed up. This is the ensure the privacy of our host.",
			value: "item-4",
		},
	];
</script>

<a id="FAQ"></a>

<div
	id="faq"
	class="container py-24 sm:py-32 bg-black relative isolate"
>
	<div class="absolute left-1/2 top-10 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
		<div class="aspect-[2000/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-60" style="clip-path:polygon(26% 99%, 25% 91%, 25% 79%, 25% 71%, 26% 58%, 26% 51%, 31% 34%, 30% 27%, 33% 19%, 41% 18%, 41% 11%, 56% 7%, 63% 9%, 69% 11%, 71% 26%, 71% 46%, 76% 61%, 76% 77%, 76% 94%, 76% 100%, 84% 98%, 84% 91%, 84% 76%, 82% 56%, 86% 21%, 81% 26%, 82% 42%, 81% 33%, 80% 25%, 78% 21%, 76% 15%, 73% 10%, 70% 5%, 65% 3%, 58% 3%, 52% 3%, 48% 4%, 40% 7%, 32% 17%, 26% 25%, 26% 32%, 21% 47%, 19% 59%, 16% 73%, 16% 85%, 15% 97%, 15% 100%); "></div>
	</div>
	<h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-300">
		Frequently Asked{" "}
		<span class="bg-gradient-to-b from-gray-400 to-white text-transparent bg-clip-text">
          Questions
        </span>
	</h2>
		<Accordion.Root
			class="w-full AccordionRoot"
		>
			{#each FAQList as item}
				<Accordion.Item
					value={item.value}
				>
					<Accordion.Trigger class="text-left text-gray-200">
						{item.question}
					</Accordion.Trigger>

					<Accordion.Content class="text-gray-200">{item.answer}</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>

		<h3 class="font-medium mt-4 text-gray-400">
			Still have questions?{" "}
			<a
				rel="noreferrer noopener"
				href="#"
				class="text-gray-200 transition-all border-primary hover:border-b-2"
			>
				Contact us @ freepythonforkids@gmail.com
			</a>
		</h3>
</div>