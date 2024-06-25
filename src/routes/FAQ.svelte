<script lang="ts">
	import * as Accordion from "$lib/components/ui/accordion/index.js";

	interface FAQProps {
		question: string;
		answer: string;
		value: string;
	}

	const FAQList: FAQProps[] = [
		{
			question: "Is this template free?",
			answer: "Yes. It is a free ChadcnUI template.",
			value: "item-1",
		},
		{
			question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
			value: "item-2",
		},
		{
			question:
				"Lorem ipsum dolor sit amet  Consectetur natus dolores minus quibusdam?",
			answer:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis necessitatibus maxime quis ipsa vitae cumque quo?",
			value: "item-3",
		},
		{
			question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?",
			answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
			value: "item-4",
		},
		{
			question:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
			value: "item-5",
		},
	];
</script>

<section
	id="faq"
	class="container py-24 sm:py-32 bg-black"
>
	<a id="FAQ"><h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-300">
		Frequently Asked{" "}
		<span class="bg-gradient-to-b from-gray-400 to-white text-transparent bg-clip-text">
          Questions
        </span>
	</h2></a>

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
			Contact us
		</a>
	</h3>
</section>