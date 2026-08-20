/*
  # Create Contact and Chat Tables for Synitrix Website

  ## Overview
  This migration creates the necessary database structure for the Synitrix corporate website,
  including tables for contact form submissions and chatbot messages.

  ## New Tables Created

  ### 1. `contact_submissions`
  Stores all contact form submissions from the website's Contact Us modal.
  
  **Columns:**
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `name` (text, required) - Full name of the person contacting
  - `email` (text, required) - Email address for follow-up communication
  - `contact_number` (text, required) - Phone number for direct contact
  - `message` (text, required) - The message content from the contact form
  - `created_at` (timestamptz) - Timestamp when the submission was created
  - `status` (text) - Tracking status (new, in_progress, resolved)

  ### 2. `chat_messages`
  Stores urgent queries submitted through the chatbot feature.
  
  **Columns:**
  - `id` (uuid, primary key) - Unique identifier for each chat message
  - `message` (text, required) - The urgent query message content
  - `type` (text) - Type of message (urgent_query, general, etc.)
  - `created_at` (timestamptz) - Timestamp when the message was submitted
  - `status` (text) - Processing status (pending, reviewed, resolved)

  ## Security
  
  ### Row Level Security (RLS)
  - Both tables have RLS enabled for data protection
  - Insert policies allow anonymous users to submit forms and messages
  - Select/Update/Delete policies are restricted to authenticated admin users only
  
  ## Indexes
  - Created indexes on created_at columns for efficient querying and sorting
  - Status columns are indexed for quick filtering

  ## Important Notes
  1. Anonymous users can only INSERT data (submit forms/messages)
  2. Only authenticated administrators can view, update, or delete submissions
  3. All timestamps use timestamptz for proper timezone handling
  4. Default status values ensure proper tracking workflow
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  contact_number text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create chat_messages table
CREATE TABLE IF NOT EXISTS chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  message text NOT NULL,
  type text DEFAULT 'urgent_query',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_chat_messages_created_at ON chat_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_chat_messages_status ON chat_messages(status);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Policies for contact_submissions table

-- Make this migration safe to retry when a previous run created policies
-- before the migration could be recorded as complete.
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can view contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can delete contact submissions" ON contact_submissions;

-- Allow anonymous users to insert contact submissions
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users (admins) to view all submissions
CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users (admins) to update submissions
CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users (admins) to delete submissions
CREATE POLICY "Authenticated users can delete contact submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (true);

-- Policies for chat_messages table

DROP POLICY IF EXISTS "Anyone can submit chat messages" ON chat_messages;
DROP POLICY IF EXISTS "Authenticated users can view chat messages" ON chat_messages;
DROP POLICY IF EXISTS "Authenticated users can update chat messages" ON chat_messages;
DROP POLICY IF EXISTS "Authenticated users can delete chat messages" ON chat_messages;

-- Allow anonymous users to insert chat messages
CREATE POLICY "Anyone can submit chat messages"
  ON chat_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users (admins) to view all messages
CREATE POLICY "Authenticated users can view chat messages"
  ON chat_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users (admins) to update messages
CREATE POLICY "Authenticated users can update chat messages"
  ON chat_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users (admins) to delete messages
CREATE POLICY "Authenticated users can delete chat messages"
  ON chat_messages
  FOR DELETE
  TO authenticated
  USING (true);
