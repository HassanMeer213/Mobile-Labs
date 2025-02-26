import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function CallAPI() {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = (await response.json()) as Post;
        setData(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.apiContainer}>
      <Text style={styles.heading}>API Response</Text>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1976d2" />
          <Text style={styles.loading}>Loading data...</Text>
        </View>
      )}

      {error && (
        <View style={styles.error}>
          <Text style={styles.errorText}>Error: {error}</Text>
        </View>
      )}

      {data && (
        <View style={styles.dataCard}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.body}>{data.body}</Text>
          <View style={styles.meta}>
            <Text style={styles.metaText}>User ID: {data.userId}</Text>
            <Text style={styles.metaText}>Post ID: {data.id}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  apiContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 20,
    width: "100%",
    maxWidth: 500,
    alignSelf: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  loadingContainer: {
    alignItems: "center",
    padding: 20,
  },
  loading: {
    color: "#666",
    fontStyle: "italic",
    marginTop: 10,
  },
  error: {
    backgroundColor: "#ffebee",
    padding: 10,
    borderRadius: 4,
    borderLeftWidth: 4,
    borderLeftColor: "#d32f2f",
  },
  errorText: {
    color: "#d32f2f",
  },
  dataCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    color: "#1976d2",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "capitalize",
  },
  body: {
    color: "#333",
    lineHeight: 22,
    marginBottom: 15,
  },
  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 10,
  },
  metaText: {
    color: "#757575",
    fontSize: 14,
  },
});
