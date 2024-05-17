import pandas as pd
from sqlalchemy import create_engine
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import joblib
import mysql.connector

def create_connection():
    connection = mysql.connector.connect(
        host='localhost',  # Cambiar a 'localhost' o la IP del servidor MySQL
        database='sensores',
        port='3306',
        user='admin',
        password='1234'
    )
    return connection

def get_engine():
    user = 'admin'
    password = '1234'
    host = '192.168.47.150'  # Cambiar a 'localhost' o la IP del servidor MySQL
    database = 'sensores'
    engine = create_engine(f'mysql+mysqlconnector://{user}:{password}@{host}/{database}')
    return engine

# Prueba de conexión
try:
    connection = create_connection()
    print("Conexión exitosa")
    connection.close()
except mysql.connector.Error as err:
    print(f"Error: {err}")

# Conectar a la base de datos y cargar los datos en un DataFrame
engine = get_engine()
df = pd.read_sql_table('lecturasAmbiente', engine)

print(df)

# Asegúrate de que la columna 'hora' está en el formato correcto y la convertimos a valores numéricos
df['hora'] = df['hora'].astype('int64') // 10**9 # Convertir a segundos desde la época

             
# Separar características y objetivos
X_humidity = df[['hora', 'temperatura']]
y_humidity = df['humedad']

X_temperature = df[['hora', 'humedad']]
y_temperature = df['temperatura']

# Imprimir los DataFrames y series resultantes
print(df)
print(X_humidity)
print(y_humidity)
print(X_temperature)
print(y_temperature)


# Ejemplo de entrenamiento de un modelo de regresión lineal para predecir la humedad
X_train_hum, X_test_hum, y_train_hum, y_test_hum = train_test_split(X_humidity, y_humidity, test_size=0.2, random_state=42)
model_hum = LinearRegression()
model_hum.fit(X_train_hum, y_train_hum)
y_pred_hum = model_hum.predict(X_test_hum)
mse_hum = mean_squared_error(y_test_hum, y_pred_hum)
print(f'MSE for Humidity Prediction: {mse_hum}')

# Guardar el modelo de humedad
#joblib.dump(model_hum, 'model_humidity.pkl')

# Ejemplo de entrenamiento de un modelo de regresión lineal para predecir la temperatura
X_train_temp, X_test_temp, y_train_temp, y_test_temp = train_test_split(X_temperature, y_temperature, test_size=0.2, random_state=42)
model_temp = LinearRegression()
model_temp.fit(X_train_temp, y_train_temp)
y_pred_temp = model_temp.predict(X_test_temp)
mse_temp = mean_squared_error(y_test_temp, y_pred_temp)
print(f'MSE for Temperature Prediction: {mse_temp}') 

# Guardar el modelo de temperatura
#joblib.dump(model_temp, 'model_temperature.pkl')