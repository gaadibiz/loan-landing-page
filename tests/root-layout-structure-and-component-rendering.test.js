```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For extended matchers

// --- Mocking Setup ---
// Mock next/font/google to control the output of font functions.
// layout.tsx uses the `variable` property for the body's class names.
jest.mock('next/font/google', () => ({
  Geist: jest.fn(() => ({
    variable: '--font-geist-sans-mock',
    className: 'mock-geist-sans-class', // Added for completeness, though `variable` is used in layout.tsx
  })),
  Geist_Mono: jest.fn(() => ({
    variable: '--font-geist-mono-mock',
    className: 'mock-geist-mono-class', // Added for completeness
  })),
}));

// Mock Navbar and Footer components.
// This isolates the RootLayout and prevents rendering of their actual implementations.
// Using `data-testid` makes them easily queryable.
jest.mock('@/components/Navbar', () => {
  // eslint-disable-next-line react/display-name
  return () => <div data-testid="mock-navbar">Mock Navbar Content</div>;
});
jest.mock('@/components/Footer', () => {
  // eslint-disable-next-line react/display-name
  return () => <div data-testid="mock-footer">Mock Footer Content</div>;
});

// Mock next/script to prevent client-side script execution issues in JSDOM environment
// and to confirm its presence if relevant.
jest.mock('next/script', () => {
  // eslint-disable-next-line react/display-name
  return (props: any) => <div data-testid="mock-script" {...props}>Mock Script Placeholder</div>;
});

// Import the component under test after all necessary mocks are set up.
import RootLayout from '../src/app/layout';

// Note: The `metadata` export in `layout.tsx` is a Next.js server-side concept
// that defines head tags (like title, description). React Testing Library
// primarily focuses on the DOM output rendered by the component's JSX.
// Testing `document.title` or meta tags injected by Next.js's `metadata`
// requires a more advanced setup beyond standard RTL in JSDOM.
// Therefore, these tests focus on the visible JSX structure and attributes.

describe('RootLayout Structure and Component Rendering', () => {

  // Test 1: Verify the `html` tag and its `lang` attribute.
  // Includes a positive check for `lang="en"` and a negative check for an incorrect language.
  test('renders html tag with lang="en" and not an incorrect language', () => {
    // Render the RootLayout with some dummy children.
    render(<RootLayout><div/></RootLayout>);

    // `document.documentElement` refers to the `<html>` tag in the JSDOM environment.
    expect(document.documentElement).toHaveAttribute('lang', 'en');
    expect(document.documentElement).not.toHaveAttribute('lang', 'es'); // Negative assertion
  });

  // Test 2: Verify the `body` tag and its font CSS classes.
  // Checks for the expected mocked font classes and ensures an arbitrary incorrect class is not present.
  test('renders body tag with appropriate font CSS classes and no arbitrary incorrect class', () => {
    render(<RootLayout><div/></RootLayout>);

    // The `layout.tsx` applies `geistSans.variable` and `geistMono.variable` directly.
    // We expect the body's class list to contain the mocked values.
    const expectedClassNames = '--font-geist-sans-mock --font-geist-mono-mock';

    // `document.body` refers to the `<body>` tag.
    expect(document.body).toHaveClass(expectedClassNames.split(' ').join(' '));
    // Negative assertion: ensures a class that shouldn't be there is not present.
    expect(document.body).not.toHaveClass('some-incorrect-class-that-should-not-exist');
  });

  // Test 3: Verify the presence of `Navbar` and `Footer` components.
  // Uses `data-testid` from the mocks to find these components.
  test('renders Navbar and Footer components', () => {
    render(<RootLayout><div/></RootLayout>);

    // Check that the mocked Navbar and Footer are in the document.
    expect(screen.getByTestId('mock-navbar')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();

    // Although not a strict "negative" test, implicitly, we are checking
    // for components that *are* expected, ensuring no unexpected components
    // would show up in their place if mocks were broken.
    expect(screen.getByText('Mock Navbar Content')).toBeInTheDocument();
    expect(screen.getByText('Mock Footer Content')).toBeInTheDocument();
  });

  // Test 4: Verify that the `children` prop content is rendered correctly.
  test('renders children prop content within the layout', () => {
    const testChildContent = "This is some test content for children prop.";
    render(
      <RootLayout>
        <p>{testChildContent}</p>
      </RootLayout>
    );

    // Assert that the text from the children prop is visible in the document.
    expect(screen.getByText(testChildContent)).toBeInTheDocument();
  });

  // Test 5: Comprehensive smoke test to ensure all main structural elements and components are present.
  // This combines checks for `html`, `body` classes, `Navbar`, `Footer`, `children`, and `Script` mocks.
  test('renders the complete layout structure including essential components and script', () => {
    const uniqueChildContent = "Comprehensive Test Child Content";
    render(
      <RootLayout>
        <section>{uniqueChildContent}</section>
      </RootLayout>
    );

    // 1. Check for `html` and `body` tags.
    expect(document.documentElement).toBeInTheDocument();
    expect(document.body).toBeInTheDocument();

    // 2. Check for `lang` attribute on `html`.
    expect(document.documentElement).toHaveAttribute('lang', 'en');

    // 3. Check for mocked font classes on `body`.
    const expectedBodyClasses = '--font-geist-sans-mock --font-geist-mono-mock';
    expect(document.body).toHaveClass(expectedBodyClasses.split(' ').join(' '));

    // 4. Check for Navbar.
    expect(screen.getByTestId('mock-navbar')).toBeInTheDocument();
    expect(screen.getByText('Mock Navbar Content')).toBeInTheDocument();

    // 5. Check for Footer.
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
    expect(screen.getByText('Mock Footer Content')).toBeInTheDocument();

    // 6. Check for children content.
    expect(screen.getByText(uniqueChildContent)).toBeInTheDocument();

    // 7. Check for the mocked Script component, ensuring it's rendered as part of the layout.
    expect(screen.getByTestId('mock-script')).toBeInTheDocument();
    expect(screen.getByText('Mock Script Placeholder')).toBeInTheDocument();
  });
});
```