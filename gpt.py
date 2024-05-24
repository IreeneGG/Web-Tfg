import openai

# Configura tu clave de API
openai.api_key = 'KEY'

# Define una función para obtener respuestas
def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0,
    )
    return response.choices[0].message["content"]



preprompt = "Actua como un experto en agricultura, no respondas otro tipo de preguntas y empieza siempre con un ¡Bienvenido a Brot!"
user_prompt = input("Por favor, ingrese su pregunta: ")



response = get_completion(preprompt + "USERPROMPT:" + user_prompt)
print(response)




