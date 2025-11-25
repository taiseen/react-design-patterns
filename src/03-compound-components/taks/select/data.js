export const options = [
    { value: "apple", label: "🍎 Apple" },
    { value: "banana", label: "🍌 Banana" },
    { value: "orange", label: "🍊 Orange" },
];

export const aiModelLabel = {
    claude35sonnetV1: 'Claude-3.5 Sonnet v1',
    claude35sonnetV2: 'Claude-3.5 Sonnet v2',
    claude37: 'Claude-3.7 Sonnet',
    claudeSonnet4: 'Claude Sonnet 4',
    claudeOpus4: 'Claude Opus 4',
    gptO1Preview: 'o1-preview',
    haiku: 'Claude-3 Haiku',
    deepseek: 'DeepSeek R1',
    llama3: 'LLaMA 3 70B',
    gpt4oMini: 'GPT-4o-Mini',
    gptO1Mini: 'o1-mini',
    gpt41: 'GPT-4.1',
    gpt4o: 'GPT-4o',
    o3mini: 'o3-mini',
    o3: 'o3',
    o1: 'o1',
};


export const aiModels = [
    {
        id: crypto.randomUUID(),
        model: 'anthropic.claude-3-5-sonnet-20240620-v1:0',
        label: aiModelLabel.claude35sonnetV1,
        icon: '🧠',
        isDefault: false,
    },
    {
        id: crypto.randomUUID(),
        model: 'anthropic.claude-3-5-sonnet-20241022-v2:0',
        label: aiModelLabel.claude35sonnetV2,
        icon: '🎲',
    },
    {
        id: crypto.randomUUID(),
        model: 'anthropic.claude-3-7-sonnet-20250219-v1:0',
        label: aiModelLabel.claude37,
        icon: '🎯',
    },
    {
        id: crypto.randomUUID(),
        model: 'anthropic.claude-sonnet-4-20250514-v1:0',
        label: aiModelLabel.claudeSonnet4,
        icon: '🚀',
        isDefault: false,
    },
    {
        id: crypto.randomUUID(),
        model: 'anthropic.claude-opus-4-20250514-v1:0',
        label: aiModelLabel.claudeOpus4,
        icon: '🛰️',
        isDefault: false,
    },
    {
        id: crypto.randomUUID(),
        model: 'deepseek-r1',
        label: aiModelLabel.deepseek,
        icon: '🐳',
        isDefault: false,
    },
    {
        id: crypto.randomUUID(),
        model: 'gpt-4o',
        label: aiModelLabel.gpt4o,
        icon: '⚛️',
        isDefault: false,
    },
    {
        id: crypto.randomUUID(),
        model: 'o1-mini',
        label: aiModelLabel.gptO1Mini,
        icon: '🧿',
    },
    {
        id: crypto.randomUUID(),
        model: 'o1-preview',
        label: aiModelLabel.gptO1Preview,
        icon: '👁️‍🗨️',
    },
    {
        id: crypto.randomUUID(),
        model: 'gpt-4.1',
        label: aiModelLabel.gpt41,
        icon: '👁️‍🗨️',
        isDefault: false,
    },
    {
        id: crypto.randomUUID(),
        model: 'o1',
        label: aiModelLabel.o1,
        icon: '⭕',
        isDefault: true
    },
    {
        id: crypto.randomUUID(),
        model: 'o3',
        label: aiModelLabel.o3,
        icon: '🎯',
        isDefault: false,
    },
    {
        id: crypto.randomUUID(),
        model: 'o3-mini',
        label: aiModelLabel.o3mini,
        icon: '🧿',
        isDefault: false,
    },
    // 🚫🚫🚫 OFF THIS MODEL 🚫🚫🚫
    {
        id: crypto.randomUUID(),
        model: 'gpt-4o-mini',
        label: aiModelLabel.gpt4oMini,
        icon: '🕹️',
    },
    {
        id: crypto.randomUUID(),
        model: 'anthropic.claude-3-haiku-20240307-v1:0',
        label: aiModelLabel.haiku,
        icon: '\uD83C\uDF00',
    },
    {
        id: crypto.randomUUID(),
        model: 'meta.llama3-70b-instruct-v1:0',
        label: aiModelLabel.llama3,
        icon: '\uD83E\uDD99',
    },
];