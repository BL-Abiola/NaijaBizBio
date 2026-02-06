'use server';

/**
 * @fileOverview A flow for generating Facebook posts.
 *
 * - generateFacebookPost - A function that generates a Facebook post.
 * - GenerateFacebookPostInput - The input type for the generateFacebookPost function.
 * - GenerateFacebookPostOutput - The return type for the generateFacebookPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFacebookPostInputSchema = z.object({
  topic: z.string().describe('The topic or announcement for the post.'),
  tone: z.string().describe('The desired tone for the post.'),
});
export type GenerateFacebookPostInput = z.infer<typeof GenerateFacebookPostInputSchema>;

const GenerateFacebookPostOutputSchema = z.object({
  post: z.string().describe('The generated Facebook post.'),
});
export type GenerateFacebookPostOutput = z.infer<typeof GenerateFacebookPostOutputSchema>;

export async function generateFacebookPost(input: GenerateFacebookPostInput): Promise<GenerateFacebookPostOutput> {
  return generateFacebookPostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFacebookPostPrompt',
  input: {schema: GenerateFacebookPostInputSchema},
  output: {schema: GenerateFacebookPostOutputSchema},
  prompt: `You are a viral social media expert specializing in engaging Facebook content.

Your task is to generate **3 unique post options** based on the topic provided. The posts should be optimized for Facebook's platform, encouraging comments, shares, and reactions.

**Topic:**
{{{topic}}}

**Style Guidelines:**
*   **Tone:** Your tone should be: **{{{tone}}}**.
*   **Emojis:** Use relevant emojis to add personality and visual appeal.
*   **Structure:** Start with a strong hook, provide value or tell a story, and end with a question or a clear call-to-action to spark engagement.
*   **Hashtags:** Include 3-5 relevant hashtags at the end.

Format your response as a single block of text. Present the 3 posts as a numbered list, separated by a blank line.
  `,
});

const generateFacebookPostFlow = ai.defineFlow(
  {
    name: 'generateFacebookPostFlow',
    inputSchema: GenerateFacebookPostInputSchema,
    outputSchema: GenerateFacebookPostOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
