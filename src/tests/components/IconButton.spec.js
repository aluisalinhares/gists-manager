import { mount } from 'vitest';
import IconButton from './IconButton.vue';

describe('IconButton', () => {
    it('renders the button without a border by default', async () => {
        const wrapper = mount(IconButton);
        expect(wrapper.html()).toContain('icon-button');
        expect(wrapper.html()).not.toContain('icon-button--border');
    });

    it('renders the button with a border when border prop is true', async () => {
        const wrapper = mount(IconButton, {
            props: {
                border: true
            }
        });
        expect(wrapper.html()).toContain('icon-button');
        expect(wrapper.html()).toContain('icon-button--border');
    });

    it('emits click event when clicked', async () => {
        const handleClick = jest.fn();
        const wrapper = mount(IconButton, {
            props: {
                onClick: handleClick
            }
        });
        await wrapper.find('button').trigger('click');
        expect(handleClick).toHaveBeenCalled();
    });
});
